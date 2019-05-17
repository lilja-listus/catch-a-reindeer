The project is built with `React` using `Algolia`.

The domain is registered at www.domain.com

Server: nginx on vps (ubuntu).

## `Build the project`

`yarn build`

## `SSL certificate`

### `generate ssl certificate`

- Go to https://www.sslforfree.com/ and write the name of your domain and click “Create Free SSL Certificate”
- Choose Manual Verification(DNS) and press Manually Verify Domain
- Go to domain.com -> DNS & Nameservers and update/create DNS records
- If you are creating new ones Name, Type: TXT, Content, TTL: 1/2
- Open the links from the step 3. On your sulforfree page.
  Click the button to get certificates

### `Upload certificate to the server`

- copy the keys to your ssh `scp private.key root@ip/`
- move to the chosen folder `mv ca_bundle.crt <route>/ssl/`
- Update the config adding the following:
  `server { listen 443 ssl; ssl_certificate <route>/certificate.crt; ssl_certificate_key <route>/private.key; }`
