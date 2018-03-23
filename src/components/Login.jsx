import React from 'react';
import Grid from 'material-ui/Grid';
import Input, { InputLabel } from 'material-ui/Input';
import { FormControl, FormHelperText } from 'material-ui/Form';
import Button from 'material-ui/Button';
import Typography from 'material-ui/Typography';
import { People , Build , AccountBalance}  from 'material-ui-icons';
import styles from '../css/common.css';

const PasswordForm = () =>{
  return(
    <FormControl margin="normal" fullWidth>
      <InputLabel htmlFor="password">Password</InputLabel>
      <Input type="password" />   
    </FormControl> 
  );
}

const EmailForm = () => {
  return(
    <FormControl margin="normal" fullWidth> 
      <InputLabel htmlFor="emal">Email</InputLabel>
      <Input type="email" color="primary"/>   
    </FormControl> 
  );
}

const SubmitForm = () =>{
  return(
    <FormControl margin="normal" >
      <Button type="submit" variant="raised" color="secondary">登録</Button>
    </FormControl>
  );
}

const LoginForm = () => {
  return(
    <form>
      <PasswordForm />
      <EmailForm />
      <SubmitForm />
    </form>
  );
}

const Login = () => {
  return(
    <Grid container direction={'row-reverse'} alignItems={'stretch'} justify={'center'} className={styles.box}>
      <Grid container alignItems={'center'} item md={6} xs={12}>
        <LoginForm />
      </Grid>
      <Grid container direction={'column'} item md={6} xs={12} justify={'center'} className={styles.backGroundColorMain}>
          <Typography variant="title"><AccountBalance  />これはReactとRailsで作られたTwitterのデモです</Typography>
          <Typography variant="title"><People />使いたい人は新規登録してください</Typography>
          <Typography variant="title"><Build />GitHubにコードがアップされているので、誰でも作ることができます</Typography>
      </Grid>
    </Grid>
  );
}

export default Login;
