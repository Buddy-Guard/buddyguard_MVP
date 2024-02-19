import * as particleAuth from '@particle-network/rn-auth';
import {
  Env,
  Buffer,
  LoginType,
  ParticleInfo,
  SocialLoginPrompt,
  SupportAuthType,
  LoginAuthorization,
} from '@particle-network/rn-auth';

import {AvalancheTestnet} from '@particle-network/chains';
import {useNavigation} from '@react-navigation/native';

ParticleInfo.projectId = '053e7e19-ce42-4263-ae5a-8e759f456743';
ParticleInfo.clientKey = 'cSoBdALAjz32uwU3dr3r03LreSJQ2dUZ5zW8DstZ';

const chainInfo = AvalancheTestnet;
const env = Env.Production;
particleAuth.init(chainInfo, env);

export async function authenticate(navigation) {
  const type = LoginType.All;
  const supportAuthType = [SupportAuthType.All];

  const result1 = await particleAuth.login(type, '', supportAuthType);
  if (result1.status) {
    const userInfo = result1.data;
    console.log(userInfo);
    console.log('name from auth page', userInfo.name);

    navigation.navigate('Home', {userData: userInfo});

    return userInfo;
  } else {
    const error = result1.data;
    console.log(error);
  }

  // const message = 'Hello Particle';
  // const messageHex = '0x' + Buffer.from(message).toString('hex');

  // const authorization = new LoginAuthorization(messageHex, false);
  // const result2 = await particleAuth.login(
  //   type,
  //   '',
  //   supportAuthType,
  //   undefined,
  //   authorization,
  // );
}
