import { StackContext, Api, Cognito } from 'sst/constructs';

export function ProfileStack({ stack }: StackContext) {
    const api = new Api(stack, 'api', {
        defaults: {
            authorizer: 'iam',
        },
        routes: {
            'GET /': 'packages/functions/src/lambda.handler',
        },
    });

    const auth = new Cognito(stack, 'auth', {
        login: ['email'],
    });

    auth.attachPermissionsForAuthUsers(stack, [api]);

    stack.addOutputs({
        ApiEndpoint: api.url,
        UserPoolId: auth.userPoolId,
        IdentityPoolId: auth.cognitoIdentityPoolId,
        UserPoolClientId: auth.userPoolClientId,
    });
}
