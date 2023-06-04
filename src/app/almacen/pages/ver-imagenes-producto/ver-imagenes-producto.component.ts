import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params } from '@angular/router';
import { Storage, ref, uploadBytes, listAll, getDownloadURL, deleteObject } from '@angular/fire/storage';
import { MessageBox } from 'src/app/shared/Helpers/MessageBox';

@Component({
  selector: 'app-ver-imagenes-producto',
  templateUrl: './ver-imagenes-producto.component.html',
  styleUrls: ['./ver-imagenes-producto.component.css']
})
export class VerImagenesProductoComponent implements OnInit {

  idProducto = '';

  images: Array<string> = [];
  image = '';

  constructor(
    private activatedRouter:ActivatedRoute,
    private storage:Storage
  ) {
    this.activatedRouter.params.subscribe(
      (params: Params) => { 
        this.idProducto = params?.['idProducto'];
      }
    )
  }

  ngOnInit(): void { this.getImages(); }

  uploadImage($event:any) {
    const file = $event.target.files[0];

    const imgRef = ref(this.storage, `${this.idProducto}/${file.name}`);
    
    uploadBytes(imgRef, file)
    .then(resp => this.getImages())
    .catch(err => MessageBox.error(err))
  }

  getImages() {
    const imagesRef = ref(this.storage, this.idProducto);

    listAll(imagesRef).then(async resp => {
      this.images = [];

      for(let item of resp.items) {
        const url = await getDownloadURL(item);
        this.images.push(url)
      }

      this.image = this.images[0];
    })
    .catch(err => { MessageBox.error(err)})
  }

  async deleteImage(image:string) {
    const imageRef = ref(this.storage, image); // creamos la referencia a la imagen
 
    deleteObject(imageRef)
    .then(() => {
      MessageBox.success('Se eliminó una imagen');
      this.getImages();
    })
    .catch((err) => { MessageBox.error(err); });
  }

  changeImage(newImage:string) { this.image = newImage }
}
