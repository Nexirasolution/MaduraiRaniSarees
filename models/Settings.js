import mongoose from 'mongoose';

const SettingsSchema = new mongoose.Schema(
  {
    key: { type: String, required: true, unique: true, default: 'global' },
    storeName: { type: String, default: 'Ranis Sarees' },
    ownerName: { type: String, default: 'P.Thangarani' },
    logo: { type: String, default: '' },
    email: { type: String, default: 'madurairanisarees1983@gmail.com' },
    whatsapp: { type: String, default: '917810086767' },
    instagram: { type: String, default: 'Ranis Sarees' },
    address: { type: String, default: 'V.T. Mani Nagar, Kalligudi, Madurai (Dt), Tamil Nadu - 625701' },
    shippingFee: { type: Number, default: 49 },
    freeShippingAbove: { type: Number, default: 999 },
    seoTitle: { type: String, default: 'Ranis Sarees - Womens Sarees' },
    seoDescription: { type: String, default: 'Shop womens sarees fron Ranis Sarees' }
  },
  { timestamps: true }
);

export default mongoose.models.Settings || mongoose.model('Settings', SettingsSchema);