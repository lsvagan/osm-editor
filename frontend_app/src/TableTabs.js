import React, { useState } from 'react';
import Tabs from 'react-bootstrap/Tabs';
import Tab from 'react-bootstrap/Tab';
import TableOfPoi from './TableOfPoi';
import TableOfNode from './TableOfNode';

function TableTabs() {

    const [key, setKey] = useState('poi-table');
  
    return (
      <Tabs
        id="controlled-tab-example"
        transition={false}
        activeKey={key}
        onSelect={(k) => setKey(k)}
      >

        <Tab eventKey="poi-table" title="POI">
          <TableOfPoi />
        </Tab>

        <Tab eventKey="node-table" title="Nodes">
          <TableOfNode />
        </Tab>

      </Tabs>
    );
  }
  
export default TableTabs;