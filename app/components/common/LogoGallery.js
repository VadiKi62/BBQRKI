import React from "react";
import { Container } from "@mui/material";
import Image from "next/image";

function LogoGallery({ images, folder }) {
  return (
    <Container
      maxWidth="md"
      sx={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      {images.map((el) => (
        <Image
          key={el}
          src={`/assets/images/${folder}/${el}.gif`}
          alt={folder.toLowerCase()}
          width={folder === "Genesis" ? 160 : 120}
          height={folder === "Genesis" ? 160 : 120}
        />
      ))}
    </Container>
  );
}

export default LogoGallery;
