import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import { useEffect } from "react";
import { getPokemons } from "../../redux/actions";

export default function Home() {
  const dispatch = useDispatch();
  const pokemons = useSelector((state) => state.pokemons);
  const [page, sePage] = useState(1);
  const [perPage, setPerPage] = useState(15);

  useEffect(() => {
    dispatch(getPokemons());
  }, [dispatch]);
}
