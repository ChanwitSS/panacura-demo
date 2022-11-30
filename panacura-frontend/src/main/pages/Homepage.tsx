import { styled } from '@mui/system';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { getClinvarList } from '../../store/actions/clinvar';
import Table from '../components/Table';

const Page = styled('div')({
  height: '90%',
  width: '100%',
  display: 'flex',
  flexDirection: 'row',
  flexShrink: 0,
  flexWrap: 'wrap',
});

const TableBox = styled('div')({
  backgroundColor: 'white',
  marginLeft: 'auto',
  marginRight: 'auto',
  marginTop: '5%',
  width: '70%',
  height: '78%',
  borderRadius: '1px',
  perspective: 1,
});

const Homepage = () => {
  const clinvars = useSelector((store: any) => store.clinvar.all);
  const dispatch: any = useDispatch();
  const onFetch = () => {
    dispatch(getClinvarList());
  };
  useEffect(() => {
    onFetch();
  }, []);

  return (
    <Page>
      <TableBox>
        <Table data={clinvars}></Table>
      </TableBox>
      {/* <Form onCloseForm={onCloseForm}></Form> */}
    </Page>
  );
};

export default Homepage;
