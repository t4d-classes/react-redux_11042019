import { connect } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../carToolMaps';
import { CarTool } from '../components/CarTool';

export const CarToolContainer = connect(
  mapStateToProps, 
  mapDispatchToProps,
)(CarTool);