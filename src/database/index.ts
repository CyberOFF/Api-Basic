import mongoose from 'mongoose';

mongoose.connect('mongodb://localhost/mural2');

mongoose.Promise = global.Promise;

export default mongoose;
