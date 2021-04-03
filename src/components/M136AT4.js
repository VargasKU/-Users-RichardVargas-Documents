import React, { Component } from 'react';
import equivalentExchangeRandomize from './EquivalentExchange'
import indexNumToArray from './IndexNumToArray'
import useAlteredIndexForTargetArray from './UseAlteredIndex'
import Facts from './Facts'

const facts = Facts
const allM136AT4Facts = facts.filter(x => x.category === 'M136AT4')
const allM136AT4QAndAToNum = indexNumToArray(allM136AT4Facts)
const allM136AT4IndexRandomized = equivalentExchangeRandomize(allM136AT4QAndAToNum)
const randomM136AT4Facts = useAlteredIndexForTargetArray(allM136AT4Facts, allM136AT4IndexRandomized)
const M136AT4 = randomM136AT4Facts

export default M136AT4; 