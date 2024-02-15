import React from "react";

import ComboBox from "@/components/ui/ComboBox";
import Capsule from "@/components/ui/Capsule";
import DateBox from "@/components/ui/DateBox";
import Icon from "@/components/ui/Icon";
import TextBox from "@/components/ui/TextBox";

import Screen from "@/components/layout/Screen";
import ContentRow from "@/components/layout/ContentRow";
import ContentCell from "@/components/layout/ContentCell";
import HeaderTop from "@/components/layout/HeaderTop";
import HeaderBottom from "@/components/layout/HeaderBottom";
import {
  Table,
  TableHeader,
  TableDetail,
  TableRow,
  TableCell,
  TableCellEnd,
} from "@/components/layout/Table";

import styles from "./Case.module.scss";

export const Case = () => {
  return (
    <Screen align="center" >
      <ContentCell>
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
            <TextBox
              label="Texto a buscar"
              text=""
              className={styles.textBoxBuscar}
            />
            <ComboBox
              label="Sucursal"
              data={[":: Seleccione ::", "Otro Item"]}
              className={styles.comboBoxSuc}
            />
            <DateBox label="Fecha" className={styles.dateBoxFecha} />
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

      <ContentCell className={styles.content_cell}>
        <ContentRow className={styles.body} align="center">
          <ContentCell>
            <Table className={styles.table}>
              <TableHeader>
                <TableCell>#</TableCell>
                <TableCell>Fecha/Hora</TableCell>
                <TableCell>Torta/Solicitante</TableCell>
                <TableCell>Precio</TableCell>
                <TableCellEnd></TableCellEnd>
              </TableHeader>
              <TableDetail>
                <TableRow gap="2px">
                  <TableCell aling="center">1</TableCell>
                  <TableCell aling="left">
                    2024-01-26 <br /> 11:00
                  </TableCell>
                  <TableCell>
                    Torta Redonda #5 Bizcocho Crema con Lúcuma <br /> GLORIA
                    SEPULVEDA 2* ABONO CLIENTE
                  </TableCell>
                  <TableCell aling="right">65.800</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">2</TableCell>
                  <TableCell>2024-01-26 11:00</TableCell>
                  <TableCell>
                    Torta Redonda #3 Hoja Crema y Frambuesa <br /> GLORIA
                    SEPULVEDA 2* ABONO CLIENTE
                  </TableCell>
                  <TableCell aling="right">41.700</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">3</TableCell>
                  <TableCell>2024-01-26 13:00</TableCell>
                  <TableCell>
                    Torta Redonda #2 Hoja Crema y Frambuesa <br /> NELLY ROJAS*
                  </TableCell>
                  <TableCell aling="right">32.400</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">4</TableCell>
                  <TableCell>2024-01-26 15:00</TableCell>
                  <TableCell>
                    Torta Redonda #3 Hoja Crema y Nuez Manjar <br /> ALEJANDRA
                    LOPEZ*
                  </TableCell>
                  <TableCell aling="right">41.700</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">5</TableCell>
                  <TableCell>2024-01-26 15:00</TableCell>
                  <TableCell>
                    Torta Cuadrada # Bizcocho Crema y Piña Manjar <br /> VANESSA
                    COFRE*
                  </TableCell>
                  <TableCell aling="right">74.800</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">6</TableCell>
                  <TableCell>2024-01-26 17:00</TableCell>
                  <TableCell>
                    Torta Redonda #2 Hoja Crema y Frambuesa Manjar <br />
                    EVELYN CABELLO
                  </TableCell>
                  <TableCell aling="right">32.400</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">7</TableCell>
                  <TableCell>2024-01-26 15:00</TableCell>
                  <TableCell>
                    Torta Redonda #4 Bizcocho Nuez Crema y Nuez <br /> CECILIA
                    AGUILERA * ABONO CLIENTE
                  </TableCell>
                  <TableCell aling="right">49.500</TableCell>
                </TableRow>
                <TableRow gap="2px">
                  <TableCell aling="center">8</TableCell>
                  <TableCell>2024-01-26 17:00</TableCell>
                  <TableCell>
                    Torta Redonda #4 Bizcocho Nuez Crema con Lúcuma Manjar{" "}
                    <br /> CYNTHIA MALDONADO
                  </TableCell>
                  <TableCell aling="right">49.500</TableCell>
                </TableRow>
              </TableDetail>
            </Table>
          </ContentCell>
          <ContentCell gap="20px">
            <ContentRow gap="5px">
              <TextBox
                label="Buscar nota"
                text=""
                className={styles.textBoxSearch}
              />
              <Capsule
                color="white"
                text="La cisterna"
                className={styles.capsule}
              />
            </ContentRow>
            <ContentRow gap="20px">
              <ContentCell gap="20px">
                <ContentCell>
                  <ContentRow gap="5px">
                    <TextBox
                      label="Rut"
                      text="11.111.111-1"
                      className={styles.textBoxRut}
                    />
                    <TextBox
                      label="Nombre"
                      text="Julio Rodriguez Acevedo"
                      className={styles.textBoxName}
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <TextBox
                      label="Correo Electronico"
                      text="julio@gmail.com"
                      className={styles.textBoxEmail}
                    />
                    <TextBox
                      label="Telefono"
                      text="+569 9934 1234"
                      className={styles.textBoxPhone}
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell gap="5px">
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Forma"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxForma}
                    />
                    <ComboBox
                      label="Tamaño"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxSize}
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Masa"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxMasa}
                    />
                    <ComboBox
                      label="Sabor"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxSabor}
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <ComboBox
                      label="Crema"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxCream}
                    />
                    <ComboBox
                      label="Relleno"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxRelleno}
                    />
                  </ContentRow>
                  <ContentRow>
                    <ComboBox
                      label="Extra"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxExtra}
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <TextBox
                    label="Mensaje"
                    text="Feliz Cumpleaños"
                    className={styles.textBoxMessage}
                  />
                  <TextBox
                    label="Adicional"
                    text="Poco Manjar"
                    className={styles.textBoxAdi}
                  />
                </ContentCell>
              </ContentCell>
              <ContentCell gap="20px">
                <ContentCell>
                  <ContentRow>
                    <ComboBox
                      label="Sucursal"
                      data={[":: Seleccione Sucursal ::", "Otro Item"]}
                      className={styles.comboBoxSucursal}
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <DateBox label="Fecha" className={styles.comboBoxDate} />

                    <ComboBox
                      label="Hora"
                      data={[":: Hora ::", "Otro Item"]}
                      className={styles.comboBoxHour}
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <ContentRow gap="5px">
                    <TextBox
                      label="Precio ($)"
                      text="$12.500"
                      className={styles.textBoxPrice}
                    />
                    <TextBox
                      label="Abono ($)"
                      text="$10.000"
                      className={styles.textBoxAbono}
                    />
                  </ContentRow>
                  <ContentRow>
                    <ComboBox
                      label="Tipo de pago"
                      data={[":: Seleccione ::", "Otro Item"]}
                      className={styles.comboBoxPay}
                    />
                  </ContentRow>
                  <ContentRow>
                    <TextBox
                      label="Estado del pago"
                      text="Pendiente"
                      className={styles.textBoxPaymentStatus}
                    />
                  </ContentRow>
                </ContentCell>
                <ContentCell>
                  <ContentRow>
                    <TextBox
                      label="Estado del pedido"
                      text="En Cámara"
                      className={styles.textBoxOrderStatus}
                    />
                  </ContentRow>
                  <ContentRow>
                    <TextBox
                      label="Usuario"
                      text="Juan Perez"
                      className={styles.textBoxUser}
                    />
                  </ContentRow>
                  <ContentRow gap="5px">
                    <TextBox
                      label="Fecha"
                      text="12/02/2022"
                      className={styles.textBoxDate}
                    />
                    <TextBox
                      label="Hora"
                      text="15:34"
                      className={styles.textBoxHour}
                    />
                  </ContentRow>
                </ContentCell>
              </ContentCell>
            </ContentRow>
          </ContentCell>
        </ContentRow>
      </ContentCell>
    </Screen>
  );
};

export default Case;
