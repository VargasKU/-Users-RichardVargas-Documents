import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allM2Facts = facts.filter(x => x.category === 'M2')
const allM2QAndAToNum = indexNumToArray(allM2Facts)
const allM2IndexRandomized = equivalentExchangeRandomize(allM2QAndAToNum)
const randomM2Facts = useAlteredIndexForTargetArray(allM2Facts, allM2IndexRandomized)
const M2 = randomM2Facts

export default M2; 