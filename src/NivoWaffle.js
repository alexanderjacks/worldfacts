import React, { Component } from 'react';
import { ResponsiveWaffleHtml } from '@nivo/waffle';

class NivoWaffle extends Component {	
	render () {
		return (
		<ResponsiveWaffleHtml
            data={[
              {
                "id": "wine",
                "label": "wine",
                "value": 41.2424,
                "color": "wine"
              },
              {
                "id": "amethyst",
                "label": "amethyst",
                "value": 32.33323,
                "color": "amethyst"
              },
              {
                "id": "lilac",
                "label": "lilac",
                "value": 23.0032,
                "color": "lilac"
              }
            ]}
            total={100}
            rows={18}
            columns={14}
            margin={{
                "top": 10,
                "right": 10,
                "bottom": 10,
                "left": 10
            }}
            colors="purple_orange"
            colorBy="id"
            borderColor="inherit:darker(0.8)"
            animate={true}
            motionStiffness={90}
            motionDamping={11}
          />
        );
	}
}

export default NivoWaffle;