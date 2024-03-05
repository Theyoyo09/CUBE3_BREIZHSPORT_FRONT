import * as mongoose from 'mongoose';
import { Commande } from "./model_commande";

const commandeSchema = new mongoose.Schema<Commande>;

export const CommandeModel = mongoose.model('Commande', commandeSchema);
