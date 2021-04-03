import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allLandNavFacts = facts.filter(x => x.category === 'landnav')
const allLandNavQAndAToNum = indexNumToArray(allLandNavFacts)
const allLandNavIndexRandomized = equivalentExchangeRandomize(allLandNavQAndAToNum)
const randomLandNavFacts = useAlteredIndexForTargetArray(allLandNavFacts, allLandNavIndexRandomized)
const LandNav = randomLandNavFacts

export default LandNav; 