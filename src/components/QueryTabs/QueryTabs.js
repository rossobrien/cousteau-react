import React, { Component, PropTypes } from 'react'
import QueryList from '../QueryList/QueryList'
import * as QueryFilters from '../../constants/QueryFilters'
import { Tabs } from 'antd'
const TabPane = Tabs.TabPane

const QUERY_FILTERS = {
  [QueryFilters.SHOW_RECENT]: (a,b) => a.id - b.id,
  [QueryFilters.SHOW_LIKED]: (a,b) =>  b.likes - a.likes,
  [QueryFilters.SHOW_USEFUL]: (a,b) => b.runs - a.runs
}

export default class QueryTabs extends Component { 
  render() {
    const { queries, actions, filter } = this.props

    return (
      <div className="main-wrapper"> 
        <Tabs type="card" defaultActiveKey={filter ? filter : QueryFilters.SHOW_RECENT}>
          <TabPane tab="Recent" key={QueryFilters.SHOW_RECENT}>
            <QueryList queries={[...queries].sort(QUERY_FILTERS[QueryFilters.SHOW_RECENT])} actions={actions}/>
          </TabPane>
          <TabPane tab="Liked" key={QueryFilters.SHOW_LIKED}>
            <QueryList queries={[...queries].sort(QUERY_FILTERS[QueryFilters.SHOW_LIKED])} actions={actions}/>
          </TabPane>
          <TabPane tab="Useful" key={QueryFilters.SHOW_USEFUL}>
            <QueryList queries={[...queries].sort(QUERY_FILTERS[QueryFilters.SHOW_USEFUL])} actions={actions}/>
          </TabPane>
        </Tabs>
      </div>
    )
  }
}