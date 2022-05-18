import * as React from 'react';
import {
  GridColumnMenuFilter,
  GridColumnMenuCheckboxFilter,
} from '@progress/kendo-react-grid';
import products from './products.json';

export const ColumnMenu = (props) => {
  return (
    <div>
      <GridColumnMenuFilter {...props} expanded={true} />
    </div>
  );
};

export async function getServerSideProps() {
  // Fetch data from external API
  const res = await fetch(
    `https://sheet.best/api/sheets/75602ce5-19ff-439b-a6de-bb65288faf7a`
  );
  const data = await res.json();

  // Pass data to the page via props
  return { props: { loads: data } };
}
export const ColumnMenuCheckboxFilter = (props) => {
  return (
    <div>
      <GridColumnMenuCheckboxFilter
        {...props}
        data={props.loads}
        expanded={true}
      />
    </div>
  );
};
