import React, { useState, useEffect } from "react";
import animal01 from "../../assets/minting02.png";
import animal02 from "../../assets/minting03.png";
import animal03 from "../../assets/minting04.png";
import animal04 from "../../assets/card/Shark.png";
import animal05 from "../../assets/card/chita.png";
import animal06 from "../../assets/card/coco.png";
import animal07 from "../../assets/card/lizard2.png";
import animal08 from "../../assets/card/penguin.png";

import "../../styles/MintingCard.css";
import bg from "../../assets/bg-04.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import Footer from "../Footer";
import { getAnimalData } from "../../api";

const AnimalData = () => {
  const [elephant, setElephant] = useState();
  const [frog, setFrog] = useState();
  const [iguana, setIguana] = useState();
  const [leopard, setLeopard] = useState();
  const [penguin, setPenguin] = useState();
  const [rhino, setRhino] = useState();
  const [shark, setShark] = useState();
  const [tiger, setTiger] = useState();
  const [response, setResponse] = useState();

  useEffect(() => {
    getAnimalData()
      .then(({ data }) => {
        console.log(data);
        return data;
      })
      .then((res) => {
        setResponse(res);
        setElephant(res[1].animalTotal - res[1].animalCurrent);
        setFrog(res[2].animalTotal - res[2].animalCurrent);
        setIguana(res[3].animalTotal - res[3].animalCurrent);
        setLeopard(res[4].animalTotal - res[4].animalCurrent);
        setPenguin(res[5].animalTotal - res[5].animalCurrent);
        setRhino(res[6].animalTotal - res[6].animalCurrent);
        setShark(res[7].animalTotal - res[7].animalCurrent);
        setTiger(res[8].animalTotal - res[8].animalCurrent);
      });
  }, []);

  return (
    <div class='animal-nft'>
      <h2 class='animal-data-title'>현재 이 만큼의 NFT가 남아있어요!</h2>
      <div class='animal-card'>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal01} />
          <h2>와이오밍 두꺼비</h2>
          <h2>{frog}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal02} />
          <h2>아프리카 숲 코끼리</h2>
          <h2>{elephant}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal03} />
          <h2>호랑이</h2>
          <h2>{tiger}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal04} />
          <h2>백상아리</h2>
          <h2>{shark}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal05} />
          <h2>아무르표범</h2>
          <h2>{leopard}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal06} />
          <h2>큰뿔코뿔소</h2>
          <h2>{rhino}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal07} />
          <h2>바다 이구아나</h2>
          <h2>{iguana}개</h2>
        </div>
        <div class='animal-card-detail'>
          <img class='animal-card-img' src={animal08} />
          <h2>남부 바위뛰기 펭귄</h2>
          <h2>{penguin}개</h2>
        </div>
      </div>
    </div>
  );
};

export default AnimalData;
