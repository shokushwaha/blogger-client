import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs';

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

  loadCategoryPosts(category: string) {
    return this.firestore.collection('posts', ref => ref.where('category', '==', category)).snapshotChanges().pipe(
      map((actions: any[]) => actions.map(a => {
        const data = a.payload.doc.data();
        const id = a.payload.doc.id;
        return { id, data };
      }))
    );
  }
}
