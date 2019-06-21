import React, { Component } from 'react';
import logo from './coin.svg';
import './App.css';
import { Button, message, Layout, Row, Col } from 'antd'

import IconexConnect from './IconexConnect';
import {
  IconConverter
} from 'icon-sdk-js'
import SDK from './SDK.js';

export default class App extends Component{
  blocktimer = null
  state = {
    curBlockHeight: 0,
    endBlockHeight: 0,
    login: false,
    myAddress: '',
    curWinnerCnt: 0,
    curWinner: '',
    myCnt: 0
  }

  async getCurBlockHeight() {
    /* 블록 2초 간격 조회 */
    this.blockTimer = setInterval(async () => {
      const { height: curBlockHeight } = await SDK.iconService.getLastBlock().execute();
      console.log(curBlockHeight)
      this.setState({
        curBlockHeight
      })
    }, 2000);
  }

  componentWillUnmount() {
    clearInterval(this.blockTimer)
  }

  funcLogin = async (e) => {
    this.getCurBlockHeight()
    const myAddress = await IconexConnect.getAddress()
    const endBlockHeight = await SDK.iconService.call(
      SDK.callBuild({
        methodName: 'get_last_block_of_this_game',
        params: {
        },
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()
    
    const curWinnerCnt = await 
    SDK.iconService.call(
      SDK.callBuild({
        methodName: 'get_bestcounting',
        params: {
        },
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()
    console.log("curWinnerCnt", curWinnerCnt)

    const curWinner = await 
    SDK.iconService.call(
      SDK.callBuild({
        methodName: 'get_bestcounting_address',
        params: {
        },
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()

    const myCnt = await 
    SDK.iconService.call(
      SDK.callBuild({
        from: myAddress,
        methodName: 'get_mycounting',
        params: {
        },
        to: window.CONTRACT_ADDRESS,
      })
    ).execute()


    this.setState({
      myAddress: myAddress,
      login: true,
      endBlockHeight: Number(Math.floor(endBlockHeight/100000000)),
      curWinnerCnt:  Number(curWinnerCnt),
      curWinner: curWinner,
      myCnt: Number(myCnt)
    })
  }


  funcModule = async (e) => {

    const { sendTxBuild2 } = SDK
    
      console.log("+++++++++++++ß")
      const curWinnerCnt = await 
        SDK.iconService.call(
          SDK.callBuild({
            methodName: 'get_bestcounting',
            params: {
            },
            to: window.CONTRACT_ADDRESS,
          })
        ).execute()
  
      const myCnt = await 
      SDK.iconService.call(
        SDK.callBuild({
          from: this.state.myAddress,
          methodName: 'get_mycounting',
          params: {
          },
          to: window.CONTRACT_ADDRESS,
        })
      ).execute()
      console.log("get_mycounting", myCnt)
  
      const curWinner = await 
      SDK.iconService.call(
        SDK.callBuild({
          methodName: 'get_bestcounting_address',
          params: {
          },
          to: window.CONTRACT_ADDRESS,
        })
      ).execute()
      console.log("curWinner", curWinner)
      console.log("SET,",Number(curWinnerCnt), Number(myCnt))
      this.setState({
        curWinnerCnt:  Number(curWinnerCnt),
        curWinner: curWinner,
        myCnt: Number(myCnt)
      })  
    }


  funcPlay = async () => {

    const { sendTxBuild2 } = SDK
    console.log("================")
    console.log("ADDRESS", this.state.myAddress)
    const txObj = sendTxBuild2({
      from: this.state.myAddress,
      to: window.CONTRACT_ADDRESS,
    })
    const tx = await IconexConnect.sendTransaction(txObj)
  
    setTimeout(this.funcModule, 3000);

  }
  
  // funcChange = (e) => {
  //   const { curAmount, myAddress } = this.state
    
  //   this.setState({
  //     curAmount: e.target.value
  //   })
  //   console.log("funcChange", "BB", e.target.value, curAmount, "AA", this.state.curAmount)
  // }

render() {
//const classes = useStyles()
  
  return (

    <div className="App">
      <header className="App-header">
      {
        !this.state.login ? (
          <>
            <Button variant="contained" color="primary" onClick={this.funcLogin}>
              게임 참여하기
            </Button>
          </>
        ):(
          <>  
            <img src={logo} className="App-logo" alt="logo"/> 
            <p>
              우승자 선정까지 남은 블록 수는 {this.state.endBlockHeight-this.state.curBlockHeight}입니다. 
            </p>
            <p>우승상금은 100000000 ICX 입니다. 현재까지 {this.state.myCnt}번 참여하였습니다. </p>
            <p>
              현재까지 1등: {this.state.curWinner} 님 /   {this.state.curWinnerCnt}번 참여
            </p>
            <p>
              당신도 우승자가 될 수 있습니다.
              클릭하여 게임에 참여하세요.
            </p>
            <a style={{fontSize:30}}
              className="App-link"
              target="_blank"
              rel="noopener noreferrer" onClick={this.funcPlay}
            >click
            </a>
          </>
        )
      }

      </header>
    </div>
  );
}

}



