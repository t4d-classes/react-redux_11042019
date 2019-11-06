import { useSelector, useDispatch } from 'react-redux';

import { mapStateToProps, mapDispatchToProps } from '../carToolMaps';

export const useCarToolStore = () => {

  return { ...useSelector(mapStateToProps), ...mapDispatchToProps(useDispatch()) };

};
