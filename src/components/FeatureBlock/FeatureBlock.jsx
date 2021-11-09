import React from 'react';
import {LinearProgress, Paper} from '@mui/material';
import {makeStyles} from '@mui/styles';
import './FeatureBlock.sass';

const useStyles = makeStyles({
  progress: {
    borderRadius: 4,
    top: 7,
    backgroundColor: '#E4E7EB',
    '@media(max-width: 480px)': {
      top: 0
    }
  },
});

const FeatureBlock = ({item: {title, value, icon: FeatureIcon, type, dynamic, conversion, iconColor, accent}}) => {
  const classes = useStyles();
  return (
    <Paper
      className={`feature ${accent ? 'accent' : ''}`}
      elevation={2}
    >
      <div className="feature-top">
        <div className="feature-info">
          <div className="feature-title">{title}</div>
          <div className="feature-value">{value}</div>
        </div>
        <div className="feature-icon">
          {
            accent
              ? <FeatureIcon sx={{fontSize: 60}}/>
              : (
              <div className="feature-icon-wrap" style={{backgroundColor: iconColor}}>
                <FeatureIcon fontSize='large'/>
              </div>
            )
          }
        </div>
      </div>
      <div className="feature-bottom">
        {
          type === 'statistics'
            ? (
              <div className="feature-conversion">
                <span
                  className={`feature-conversion-value ${(dynamic === 'increase') ? 'increase' : 'decrease'}`}
                >
                  {conversion}%
                </span>
                <span className="feature-conversion-desc">Since last month</span>
              </div>
            ) : (
              <LinearProgress
                className={classes.progress}
                variant="determinate"
                value={75.5} />
            )
        }
      </div>
    </Paper>
  );
};

export default FeatureBlock;