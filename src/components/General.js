import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allGeneralFacts = facts.filter(x => x.category === 'general')
const allGeneralQAndAToNum = indexNumToArray(allGeneralFacts)
const allGeneralIndexRandomized = equivalentExchangeRandomize(allGeneralQAndAToNum)
const randomGeneralFacts = useAlteredIndexForTargetArray(allGeneralFacts, allGeneralIndexRandomized)
const General = randomGeneralFacts

export default General; 