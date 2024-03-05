import * as mongoose from 'mongoose';

const commandeSchema = new mongoose.Schema({
  idUser: String,
  phoneNumber: String,
  email: String,
  listArticles: [],
  statusCommande: Boolean,
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now}
});

export const Commande = mongoose.model('Commande', commandeSchema);
