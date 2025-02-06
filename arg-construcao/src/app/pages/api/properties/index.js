import { properties } from '../../../data/properties';

export default function handler(req, res) {
  res.status(200).json(properties);
}