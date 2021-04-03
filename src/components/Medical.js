import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allMedicalFacts = facts.filter(x => x.section === 'medical')
const allMedicalQAndAToNum = indexNumToArray(allMedicalFacts)
const allMedicalIndexRandomized = equivalentExchangeRandomize(allMedicalQAndAToNum)
const randomMedicalFacts = useAlteredIndexForTargetArray(allMedicalFacts, allMedicalIndexRandomized)
const Medical = randomMedicalFacts

export default Medical; 