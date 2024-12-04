import React, { useState } from 'react';
import Button from './components/Button/button';
import Transition from './components/Transition/transition';
import Menu from './components/Menu/menu';
import MenuItem from './components/Menu/MenuItem';
import SubMenu from './components/Menu/subMenu';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fas } from '@fortawesome/free-solid-svg-icons';
import Icon from './components/Icon/icon';
library.add(fas)

const App: React.FC = () => {
  const [show, setShow] = useState(false)
  return (
    <div className="App">
      <header className="App-header">
        <Icon icon="arrow-down" theme='primary' size='10x'></Icon>
        <Menu defaultIndex='0' onSelect={(index) => { alert(index) }} defaultOpenSubMenus={['2']}>
          <MenuItem >cool link</MenuItem>
          <MenuItem disabled>cool link2</MenuItem>
          <SubMenu title='dropdown'>
            <MenuItem >dropdown1</MenuItem>
            <MenuItem >dropdown2</MenuItem>
            <MenuItem >dropdown3</MenuItem>
          </SubMenu>
          <MenuItem >cool link3</MenuItem>
        </Menu>
        <Button size='lg' onClick={() => { setShow(!show) }}>toggle</Button>
        <Transition
          in={show}
          timeout={300}
          animation='zoom-in-left'
          wrapper
        >
          <div>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
            <p>1</p>
          </div>
        </Transition>
        <Transition
          in={show}
          timeout={300}
          animation="zoom-in-left"
          wrapper
        >
          <Button btnType='primary' size='lg'>A Large Button</Button>
        </Transition>
        {/* <Button>Hello</Button>
        <Button onClick={(e) => { e.preventDefault(); alert(123) }} disabled>Disabled Button</Button>
        <Button btnType={ButtonType.Primary} size={ButtonSize.Large}>Large Primary Button</Button>
        <Button btnType={ButtonType.Danger} size={ButtonSize.Small}>Small Danger Button</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" target='blank'>Baidu Button</Button>
        <Button btnType={ButtonType.Link} href="https://www.baidu.com" disabled>Baidu Button</Button> */}

      </header>
    </div>
  )
}


export default App;
