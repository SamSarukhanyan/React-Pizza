import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate} from "react-router-dom";
import s from './styles.module.css'


const FullPizza: React.FC = () => {
  const [pizza, setPizza] = useState<{
    imageUrl: string;
    title: string;
    price: number;
  }>();

  const { id } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    async function fetchPizza() {
      try {
        const { data } = await axios.get(
          "https://62d95cdc9eedb699635a2306.mockapi.io/items/" + id
        );
        setPizza(data);
      } catch (error) {
        alert("Error");
        navigate('/');
      }
    }

    fetchPizza();
  }, []);

  if (!pizza) {
    return <>Loading...</>;
  }

  return (
    <div className={s.root}>
      <img src={pizza.imageUrl} />
      <h2>{pizza.title}</h2>
      <h4>{pizza.price} ₽</h4>
    </div>
  );
};

export default FullPizza;
