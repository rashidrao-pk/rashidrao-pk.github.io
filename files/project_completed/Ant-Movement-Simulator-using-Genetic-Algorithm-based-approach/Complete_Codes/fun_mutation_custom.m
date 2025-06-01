function y=fun_mutation_custom(x,mu)
%%
% Copyright (c) 2015, Yarpiz (www.yarpiz.com)
% All rights reserved. Please read the "license.txt" for license terms.
%
% Project Code: YPML122
% Project Title: Feature Selection using GA (Variable Number of Features)
% Publisher: Yarpiz (www.yarpiz.com)
% 
% Developer: S. Mostapha Kalami Heris (Member of Yarpiz Team)
% 
% Contact Info: sm.kalami@gmail.com, info@yarpiz.com
%
    nVar=numel(x);
    nmu=ceil(mu*nVar);
    j=randsample(nVar,nmu);
    y=x;
    y(j)=1-x(j);
end