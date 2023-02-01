import React, { useState } from 'react'
import "./header.scss"
import {FaLocationArrow, FaSearch, FaShoppingCart, FaUserAlt} from 'react-icons/fa'
import {SiDynatrace} from 'react-icons/si'
import {BsQuestionCircleFill} from 'react-icons/bs'

export default function Header() {
  const [dropSwitcher, setDropSwitcher] = useState(0)
  return (
    <div className='header'>
      <div className="header-top">
        <div className="header-img">
          <img src="/images/logo.jpg" alt="" />
        </div>
        <div className="header-search">
          <input type="text" className="form-control" placeholder='SS2023 New Arrivals' />
          <div className="header-search-svg">
            <FaSearch/>            
          </div>
        </div>
        <div className="header-options">
          <div>
            <FaUserAlt/>
            <span>
              Account
            </span>
          </div>
          <div>
            <FaLocationArrow/>
            <span>
              Ship to <img src="/images/flag-morocco.png" alt="" /> / $USD <span> /English </span>
            </span>
          </div>
          <div>
            <SiDynatrace/>
            <span>
              Track
            </span>
          </div>
          <div>
            <BsQuestionCircleFill/>
            <span>
              Help
            </span>
          </div>
          <div>
            <FaShoppingCart/>
            <span>
              0
            </span>
          </div>
        </div>
      </div>
      <div className="header-bottom">
        <div className="header-bottom-titles"  onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>dropSwitcher>0&&setDropSwitcher(dropSwitcher)}>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(1)}>
            NEW
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(2)}>
            PRE-ORDER
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(3)}>
            SS2023
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(4)}>
            CLOTHING
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(5)}>
            SWIMWEAR
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(6)}>
            TOPS
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(7)}>
            DRESSES
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(8)}>
            PLUS SIZE
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(9)}>
            BOTTOMS
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(10)}>
            JUMPSUITS
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(11)}>
            JEW & ACCS
          </h2>
          <h2 onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(12)}>
            SALE
          </h2>
        </div>
        <div className={`header-bottom-dropdown ${dropSwitcher>0?"show":"hide"}`}  onMouseOut={()=>setDropSwitcher(0)} onMouseOver={()=>setDropSwitcher(dropSwitcher)}>
          {
            dropSwitcher>0&&(
              <>
                  <div>
                    <h3>
                      SHOP BY DATE
                    </h3>
                    <span>
                      New In Today
                    </span>
                    <span>
                      New This Week
                    </span>
                    <span>
                      Back In Stock
                    </span>
                  </div>
                  <div>
                    <h3>
                      SHOP BY CATEGORY
                    </h3>
                    <span>
                      New In Swimwear
                    </span>
                    <span>
                      New In Tops
                    </span>
                    <span>
                      Back In Plus Size
                    </span>
                    <span>
                      New In Jewelry
                    </span>
                  </div>
                  <div>
                    <h3>
                      NEW TRENDS
                    </h3>
                    <a href="/">
                      Sparkle
                    </a>
                    <a href="/">
                      Love Velvet
                    </a>
                    <a href="/">
                      Plaid Picks
                    </a>
                    <span>
                      All Pink
                    </span>
                    <span>
                      Tie Dye
                    </span>
                    <a href="/">
                      Wedding Season
                    </a>
                    <span>
                      Sunflower
                    </span>
                    <span>
                      Geometry
                    </span>
                    <span>
                      Pride Picks
                    </span>
                  </div>
                  <div>
                  <img src="/images/new_dresses.jpg" alt="" />
                  </div>
                  <div>
                  <img src="/images/new_swimwear.jpg" alt="" />
                  </div>
                  <div>
                  <img src="/images/new_tops.jpg" alt="" />
                  </div>
              </>
            )
          }
        </div>
      </div>
        {
          dropSwitcher>0&&(
            <div className="blur"></div>
          )
        }
    </div>
  )
}
