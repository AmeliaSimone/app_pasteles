import Screen from "@/components/layout/Screen";
import ContentRow from "@/components/layout/ContentRow";
import TextBox from "@/components/ui/TextBox";
import ContentCell from "@/components/layout/ContentCell";
import HeaderTop from "@/components/layout/HeaderTop";
import Icon from "@/components/ui/Icon";
import HeaderBottom from "@/components/layout/HeaderBottom";
import ComboBox from "@/components/ui/ComboBox";
import Capsule from "@/components/ui/Capsule";
import {
  Table,
  TableHeader,
  TableDetail,
  TableRow,
  TableCell,
  TableCellEnd
} from "@/components/layout/Table";

export default function Home() {
  return (
    <>
      <Screen align="center">
        <ContentCell align="center">
          <HeaderTop width="100%">
            <ContentRow>
              <Icon name="menu" color="#979797"></Icon>
            </ContentRow>
            <ContentRow>
              <Icon name="inbox" color="#979797"></Icon>
              <Icon name="qr_code_2" color="#979797"></Icon>
              <Icon name="inbox" color="#979797"></Icon>
              <Icon name="person" color="#979797"></Icon>
            </ContentRow>
          </HeaderTop>
          <HeaderBottom>
            <ContentRow>
              <h2>Pedido N°4 (26/01/2024)</h2>
            </ContentRow>
            <ContentRow>
              <TextBox
                label="Texto a buscar"
                text=""
                width="350px"
              />
              <ComboBox
                label="Sucursal"
                data={[":: Seleccione ::", "Otro Item"]}
                width="220px"
              />
              <TextBox
                label="Texto a buscar"
                text=""
                width="138px"
              />
              <Icon name="search" backgroundColor=" #146C94" borderRadius="50px" width="40px" height="40px" color="white" marginTop="6px"></Icon>
            </ContentRow>
          </HeaderBottom>
        </ContentCell>

        <ContentRow>
          <ContentCell>
            <Table height="556px">
              <TableHeader>
                <TableCell width="50px">#</TableCell>
                <TableCell width="90px">Fecha/Hora</TableCell>
                <TableCell width="348px">Torta/Solicitante</TableCell>
                <TableCell width="70px">Precio</TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
                <TableRow>
                  <TableCell width="50px">#</TableCell>
                  <TableCell width="90px">Fecha/Hora</TableCell>
                  <TableCell width="348px">Torta/Solicitante</TableCell>
                  <TableCell width="70px">Precio</TableCell>
                </TableRow>
              </TableDetail>
            </Table>
          </ContentCell>
          <ContentCell marginTop="15px">
            <ContentRow>
              <TextBox
                label="Buscar nota"
                text=""
                width="541px"
              />
              <Capsule width="184px" color="white" text="La cisterna"></Capsule>
            </ContentRow>
            <ContentRow marginTop="15px">
              <ContentCell>
                <ContentCell>
                  <ContentRow>
                    <TextBox
                      label="Rut"
                      text=""
                      width="140px"
                    />
                    <TextBox
                      label="Nombre"
                      text="Julio Rodriguez Acevedo"
                      width="300px"
                    />
                  </ContentRow>
                  <ContentRow>
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
                <ContentCell marginTop="15px">
                  <ContentRow>
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
                  <ContentRow>
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
                  <ContentRow>
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
                <ContentCell marginTop="15px">
                  <TextBox
                    label="Mensaje"
                    text="Feliz Cumpleaños"
                    width="445px"
                  />
                  <TextBox
                    label="Adicional"
                    text="Poco Manjar"
                    width="445px"
                  />
                </ContentCell>
              </ContentCell>
              <ContentCell marginLeft="15px">
                <ContentCell>
                  <ContentRow>
                    <ComboBox
                      label="Sucursal"
                      data={[":: Seleccione ::", "Otro Item"]}
                      width="266px"
                    />
                  </ContentRow>
                  <ContentRow>
                    <ComboBox
                      label="Fecha"
                      data={[":: Fecha ::", "Otro Item"]}
                      width="160px"
                    />
                    <ComboBox
                      label="Hora"
                      data={[":: Hora ::", "Otro Item"]}
                      width="100px"
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell marginTop="15px">
                  <ContentRow>
                    <TextBox
                      label="Precio ($)"
                      text="$12.500"
                      width="130px"
                    />
                    <TextBox
                      label="Abono ($)"
                      text="$10.000"
                      width="131px"
                    />
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

                  <ContentCell marginTop="15px">
                    <ContentRow>
                      <TextBox
                        label="Estado del pedido"
                        text="En Cámara"
                        width="266px"
                      />
                    </ContentRow>
                    <ContentRow>
                      <TextBox
                        label="Usuario"
                        text="Juan Perez"
                        width="266px"
                      />
                    </ContentRow>
                    <ContentRow>
                      <TextBox
                        label="Fecha"
                        text="12/02/2022"
                        width="160px"
                      />
                      <TextBox
                        label="Hora"
                        text="15:34"
                        width="100px"
                      />
                    </ContentRow>
                  </ContentCell>
                </ContentCell>



              </ContentCell>
            </ContentRow>
          </ContentCell>
        </ContentRow>
      </Screen>
    </>
  );
};
