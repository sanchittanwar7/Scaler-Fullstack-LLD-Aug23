import React from 'react'
import { Tabs } from "antd";
import PageTitle from "../../components/PageTitle";
import MoviesList from "./MoviesList";
import TheatresList from './TheatresList';

const Admin = () => {
    return (
        <div>
          <PageTitle title="Admin" />
    
          <Tabs defaultActiveKey="1">
            <Tabs.TabPane tab="Movies" key="1">
                <MoviesList/>
            </Tabs.TabPane>
    
            <Tabs.TabPane tab="Theatres" key="2">
                <TheatresList />
            </Tabs.TabPane>
          </Tabs>
        </div>
      );
}

export default Admin