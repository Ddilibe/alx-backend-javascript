#!/usr/bin/env node

/*
  Script that modifies the object to use the keyname
*/

export default function getBudgetObject(income, gdp, capita) {
  const budget = {
    income,
    gdp,
    capita,
  };

  return budget;
}