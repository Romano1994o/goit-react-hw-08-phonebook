import { useSelector } from 'react-redux';
import { selectError, selectIsLoading } from 'redux/contacts/selectors';
import { LoadingWrapper, LoaderText, LoaderBar } from './Loading.styled';

export const Loading = () => {
  const isLoading = useSelector(selectIsLoading);
  const error = useSelector(selectError);
  
  return (
    isLoading && !error && (
      <LoadingWrapper>
        <LoaderText>Loading...</LoaderText>
        <LoaderBar>
          <span></span>
        </LoaderBar>
      </LoadingWrapper>
    )
  );
};
