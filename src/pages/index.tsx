import Screen from "@/components/layout/Screen";
import ContentRow from "@/components/layout/ContentRow";
import TextBox from "@/components/ui/TextBox";
import ContentCell from "@/components/layout/ContentCell";
import HeaderTop from "@/components/layout/HeaderTop";
import Icon from "@/components/ui/Icon";
import HeaderBottom from "@/components/layout/HeaderBottom";
import ComboBox from "@/components/ui/ComboBox";
import Capsule from "@/components/ui/Capsule";
import DateBox from "@/components/ui/DateBox";
import {
  Table,
  TableHeader,
  TableDetail,
  TableRow,
  TableCell,
  TableCellEnd,
} from "@/components/layout/Table";

export default function Home() {
  return (
    <>
      <Screen align="center">
        <ContentCell align="center">
          <HeaderTop width="100%">
            <ContentRow>
              <Icon iconName="menu" color="#959595"></Icon>
            </ContentRow>
            <ContentRow gap="10px">
              <Icon iconName="inbox" color="#959595"></Icon>
              <Icon iconName="qr_code_2" color="#959595"></Icon>
              <Icon iconName="inbox" color="#959595"></Icon>
              <Icon iconName="person" color="#959595"></Icon>
            </ContentRow>
          </HeaderTop>
          <HeaderBottom>
            <ContentRow>
              <h2>Pedido N°4 (26/01/2024)</h2>
            </ContentRow>
            <ContentRow gap="5px">
              <TextBox label="Texto a buscar" text="" width="350px" />
              <ComboBox
                label="Sucursal"
                data={[":: Seleccione ::", "Otro Item"]}
                width="220px"
              />
              <DateBox width="138px" label="Fecha" />
              <Capsule
                iconName="search"
                backgroundColor="#146C94"
                width="40px"
                height="40px"
                borderRadius="50%"
              />
            </ContentRow>
          </HeaderBottom>
        </ContentCell>

        <ContentRow align="center" gap="15px" height="100vh">
          <ContentCell>
            <Table>
              <TableHeader gap="2px">
                <TableCell width="50px">#</TableCell>
                <TableCell width="90px">Fecha/Hora</TableCell>
                <TableCell width="348px">Torta/Solicitante</TableCell>
                <TableCell width="70px">Precio</TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    1
                  </TableCell>
                  <TableCell width="90px" aling="left">
                    2024-01-26 <br /> 11:00
                  </TableCell>
                  <TableCell width="348px">
                    Torta Redonda #5 Bizcocho Crema con Lúcuma <br /> GLORIA
                    SEPULVEDA 2* ABONO CLIENTE
                  </TableCell>
                  <TableCell width="70px"  aling="right">65.800</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    2
                  </TableCell>
                  <TableCell width="90px">2024-01-26 11:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #3 Hoja Crema y Frambuesa <br /> GLORIA
                    SEPULVEDA 2* ABONO CLIENTE
                  </TableCell>
                  <TableCell width="70px"  aling="right">41.700</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    3
                  </TableCell>
                  <TableCell width="90px">2024-01-26 13:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #2 Hoja Crema y Frambuesa <br /> NELLY ROJAS*
                  </TableCell>
                  <TableCell width="70px"  aling="right">32.400</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    4
                  </TableCell>
                  <TableCell width="90px">2024-01-26 15:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #3 Hoja Crema y Nuez Manjar <br /> ALEJANDRA
                    LOPEZ*
                  </TableCell>
                  <TableCell width="70px"  aling="right">41.700</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    5
                  </TableCell>
                  <TableCell width="90px">2024-01-26 15:00</TableCell>
                  <TableCell width="348px">
                    Torta Cuadrada # Bizcocho Crema y Piña Manjar <br /> VANESSA
                    COFRE*
                  </TableCell>
                  <TableCell width="70px"  aling="right">74.800</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    6
                  </TableCell>
                  <TableCell width="90px">2024-01-26 17:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #2 Hoja Crema y Frambuesa Manjar <br />
                    EVELYN CABELLO
                  </TableCell>
                  <TableCell width="70px" aling="right">
                    32.400
                  </TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    7
                  </TableCell>
                  <TableCell width="90px">2024-01-26 15:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #4 Bizcocho Nuez Crema y Nuez <br /> CECILIA
                    AGUILERA * ABONO CLIENTE
                  </TableCell>
                  <TableCell width="70px" aling="right">
                    49.500
                  </TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell width="50px" aling="center">
                    8
                  </TableCell>
                  <TableCell width="90px">2024-01-26 17:00</TableCell>
                  <TableCell width="348px">
                    Torta Redonda #4 Bizcocho Nuez Crema con Lúcuma Manjar{" "}
                    <br /> CYNTHIA MALDONADO
                  </TableCell>
                  <TableCell width="70px" aling="right">
                    49.500
                  </TableCell>
                </TableRow>
              </TableDetail>
            </Table>
          </ContentCell>
          <ContentCell gap="15px">
            <ContentRow gap="5px">
              <TextBox label="Buscar nota" text="" width="541px" />
              <Capsule width="184px" color="white" text="La cisterna"></Capsule>
            </ContentRow>
            <ContentRow gap="15px">
              <ContentCell gap="15px">
                <ContentCell>
                  <ContentRow gap="5px">
                    <TextBox label="Rut" text="11.111.111-1" width="140px" />
                    <TextBox
                      label="Nombre"
                      text="Julio Rodriguez Acevedo"
                      width="300px"
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <TextBox
                      label="Correo Electronico"
                      text="julio@gmail.com"
                      width="300px"
                    />
                    <TextBox
                      label="Telefono"
                      text="+569 9934 1234"
                      width="140px"
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell gap="5px">
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Forma"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                    <ComboBox
                      label="Tamaño"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Masa"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                    <ComboBox
                      label="Sabor"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Crema"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                    <ComboBox
                      label="Relleno"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                  </ContentRow>
                  <ContentRow>
                    <ComboBox
                      label="Extra"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="220px"
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <TextBox
                    label="Mensaje"
                    text="Feliz Cumpleaños"
                    width="445px"
                  />
                  <TextBox label="Adicional" text="Poco Manjar" width="445px" />
                </ContentCell>
              </ContentCell>
              <ContentCell gap="15px">
                <ContentCell>
                  <ContentRow>
                    <ComboBox
                      label="Sucursal"
                      data={[":: Seleccione Sucursal ::", "Otro Item"]}
                      width="266px"
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <DateBox label="Fecha" width="160px" />

                    <ComboBox
                      label="Hora"
                      data={[":: Hora ::", "Otro Item"]}
                      width="100px"
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <ContentRow gap="5px">
                    <TextBox label="Precio ($)" text="$12.500" width="130px" />
                    <TextBox label="Abono ($)" text="$10.000" width="131px" />
                  </ContentRow>
                  <ContentRow>
                    <ComboBox
                      label="Tipo de pago"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="266px"
                    />
                  </ContentRow>
                  <ContentRow>
                    <TextBox
                      label="Estado del pago"
                      text="Pendiente"
                      width="266px"
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <ContentRow>
                    <TextBox
                      label="Estado del pedido"
                      text="En Cámara"
                      width="266px"
                    />
                  </ContentRow>
                  <ContentRow>
                    <TextBox label="Usuario" text="Juan Perez" width="266px" />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <TextBox label="Fecha" text="12/02/2022" width="160px" />
                    <TextBox label="Hora" text="15:34" width="100px" />
                  </ContentRow>
                </ContentCell>
              </ContentCell>
            </ContentRow>
          </ContentCell>
        </ContentRow>
      </Screen>
    </>
  );
}
