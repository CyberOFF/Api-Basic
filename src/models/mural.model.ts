import mongoose from '../database'

const muralSchema = new mongoose.Schema({
  name: {
        type:String,
        required:true,
  },
  message: {
        type:String,
        required:true,
  }
});

const Mural = mongoose.model('Mural',muralSchema);

export default Mural;
