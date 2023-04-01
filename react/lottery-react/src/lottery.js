import web3 form './web3';

const address = '0xc4A34200f1f5f8e80Bb45fB54850BA44e2463662'

const abi = [{"constant":true,"inputs":[],"name":"manager","outputs":[{"name":"","type":"address"}],"payable
":false,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"pickWi
nner","outputs":[],"payable":false,"stateMutability":"nonpayable","type":"function"},{"constant"
:true,"inputs":[],"name":"getPlayers","outputs":[{"name":"","type":"address[]"}],"payable":false
,"stateMutability":"view","type":"function"},{"constant":false,"inputs":[],"name":"enter","outpu
ts":[],"payable":true,"stateMutability":"payable","type":"function"},{"constant":true,"inputs":[
{"name":"","type":"uint256"}],"name":"players","outputs":[{"name":"","type":"address"}],"payable
":false,"stateMutability":"view","type":"function"},{"inputs":[],"payable":false,"stateMutabilit
y":"nonpayable","type":"constructor"}]

export default web3.eth.contract(abi, address);
