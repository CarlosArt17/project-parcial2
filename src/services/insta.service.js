import firebase from "../firebase";

const db = firebase.collection("/instagrart17");

class photosDataService {
    getAll() {
    return db;
}

create(photo) {
    return db.add(photo);
}

update(id, value) {
    return db.doc(id).update(value);
}

delete(id) {
    return db.doc(id).delete();
}
}

export default new PhotosDataService();