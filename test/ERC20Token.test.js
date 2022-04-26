const BigNumber = web3.BigNumber;

const ERC20Token = artifacts.require('ERC20Token');

require('chai')
  .use(require('chai-bignumber')(BigNumber))
  .should();

contract('ERC20Token', accounts => {
  const _name = 'ERC20 Token';
  const _symbol = 'ERC20';
  const _decimals = 18;

  beforeEach(async function () {
    this.token = await ERC20Token.new(_name, _symbol, _decimals);
  });

  describe('token attributes', function() {
    it('has the correct name', async function() {
      const name = await this.token.name();
      name.should.equal(_name);
    });

    it('has the correct symbol', async function() {
      const symbol = await this.token.symbol();
      symbol.should.equal(_symbol);
    });

    it('has the correct decimals', async function() {
      const decimals = await this.token.decimals();
      decimals.should.be.bignumber.equal(_decimals);
    });
  });
});
