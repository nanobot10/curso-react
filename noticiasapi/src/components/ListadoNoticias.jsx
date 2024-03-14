import { Grid, Typography, Pagination, Stack } from "@mui/material";
import useNoticias from "../hooks/useNoticias";
import Noticia from "./Noticia";
import { v4 as uuidv4 } from 'uuid';


const ListadoNoticias = () => {
  const { noticias, totalNoticias, handleChangePagina, page } = useNoticias();

 const totalPaginas = Math.ceil(totalNoticias / 20);

  return (
    <>
      <Typography
        textAlign={"center"}
        marginY={5}
        variant="h3"
        component={"h2"}
      >
        Ultimas Noticias
      </Typography>
      <Grid container spacing={2}>
        {noticias.map((noticia) => (
          <Noticia key={uuidv4()} noticia={noticia} />
        ))}
      </Grid>
      <Stack
        spacing={2}
        direction={"row"}
        justifyContent={"center"}
        alignItems={"center"}
        sx={{
            marginY: 5
        }}
      >
        <Pagination page={page} count={totalPaginas} color="primary" onChange={handleChangePagina}/>
      </Stack>
    </>
  );
};

export default ListadoNoticias;
