import { Currencies } from "../models/Currencies.model.js";
import { Rates } from "../models/Rates.model.js";

export const gelAllRates = async (req, res) => {
  try {
    const allRates = await Rates.findAll({
      include: {
        model: Currencies
      }
    });
    res.status(200).json(allRates);
  } catch (error) {
    console.log(error);
  }
};

export const createRates = async (req, res) => {
  const { value, id_currency } = req.body
  try {
    const createOneRates = await Rates.create({
      value,
      id_currency
    });
    return res.status(200).json(createOneRates);
  } catch (error) {
    console.log(error);
  }
};

export const getSymbol = async (req, res) => {
  try {
    const symbol = req.params.symbol.toUpperCase()
    const getIdCurrencies = await Currencies.findOne({ where: { symbol } })
    const currenciesId = getIdCurrencies.id
    
    const getOneSymbol = await Rates.findOne({
      where: { id_currency: currenciesId },
      include: {
        model: Currencies
      }
    })
    res.status(200).json(getOneSymbol)
  } catch (error) {
    console.log(error)
  }
}