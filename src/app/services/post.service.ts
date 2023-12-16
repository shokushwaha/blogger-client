import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';
import * as firebase from 'firebase/compat/app';
@Injectable({
  providedIn: 'root'
})
export class PostService {



  constructor(private firestore: AngularFirestore) { }

  postLoader() {
    return this.firestore.collection('posts', ref => ref.where('isFeatured', '==', true).limit(4)).snapshotChanges().pipe(
      map((actions: any[]) => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  AllPostLoader() {
    return this.firestore.collection('posts', ref => ref.orderBy('createdAt')).snapshotChanges().pipe(
      map((actions: any[]) => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  loadCategoryPosts(categoryId: string) {
    return this.firestore.collection('posts', ref => ref.where('category.categoryId', '==', categoryId)).snapshotChanges().pipe(
      map((actions: any[]) => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }

  loadSinglePost(postId: string) {
    return this.firestore.collection('posts').doc(postId).snapshotChanges().pipe(
      map((actions: any) => {
        const data = actions.payload.data();
        const id = actions.payload.id;
        return { id, data };
      })
    );
  }

  CountViews(postId: string) {

    const viewsCount = {
      views: firebase.default.firestore.FieldValue.increment(1)
    }

    return this.firestore.collection('posts').doc(postId).update(viewsCount).then(() => {
      console.log('views updated');
    });
  }
}
