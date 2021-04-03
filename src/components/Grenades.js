import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allGrenadesFacts = facts.filter(x => x.category === 'grenades')
const allGrenadesQAndAToNum = indexNumToArray(allGrenadesFacts)
const allGrenadesIndexRandomized = equivalentExchangeRandomize(allGrenadesQAndAToNum)
const randomGrenadesFacts = useAlteredIndexForTargetArray(allGrenadesFacts, allGrenadesIndexRandomized)
const Grenades = randomGrenadesFacts

export default Grenades; 