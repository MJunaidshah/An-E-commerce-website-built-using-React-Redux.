import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Cardsdata from "./CardsData";
import './style.css'
import { useDispatch } from "react-redux";
import {ADD} from '../redux/actions/action'

const Cards = () => {
  const [data, setData] = useState(Cardsdata);


  const dispatch=useDispatch();

  const send=(e)=>
  {
   dispatch(ADD(e));
  }

  return (
    <div className="container mt-3">
      <h2 className="text-center">Add To Cart Projects</h2>

      <div className="row d-flex justify-content-center alighn-items-center">
        {data.map((element, id) => {
          return (
            <>
              <Card style={{ width: "22rem",border:"none" }} className="mx-2 mt-4 card_style" >
                <Card.Img varient="top" src={element.imgdata} style={{height:"16rem"}} className="mt-3" />
                <Card.Body>
                  <Card.Title>{element.rname}</Card.Title>
                  <Card.Text>
                    Price : ₹ {element.price}
                  </Card.Text>

                 <div className="button_div d-flex justify-content-center">
                 <Button 
                 onClick={()=>send(element)}
                 variant="primary"
                  className="col-lg-12">
                    Add To Cart
                    </Button>
                 </div>

                
                </Card.Body>
              </Card>
             
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
