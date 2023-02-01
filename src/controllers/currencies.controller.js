import { Currencies } from '../models/currencies.model.js'

export const gelAllCurrencies = async (req, res) => {
  try {
    const allCurrencies = await Currencies.findAll();
    res.status(200).json(allCurrencies);
  } catch (error) {
    console.log(error);
  }
};

export const createCurrencies = async (req, res) => {
  const { description, symbol, rates_id } = req.body
  try {
    const createOneCurrencies = await Currencies.create({
      description,
      symbol, 
      rates_id
    });
    return res.status(200).json(createOneCurrencies);
  } catch (error) {
    console.log(error);
  }
};