import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allM240BFacts = facts.filter(x => x.category === 'M240B')
const allM240BQAndAToNum = indexNumToArray(allM240BFacts)
const allM240BIndexRandomized = equivalentExchangeRandomize(allM240BQAndAToNum)
const randomM240BFacts = useAlteredIndexForTargetArray(allM240BFacts, allM240BIndexRandomized)
const M240B = randomM240BFacts

export default M240B; 