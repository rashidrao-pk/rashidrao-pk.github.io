%% Batch Gradient descent
% This is the script for batch gradient descent algorithm
% using polynomial base function

clc;
clear;
close all;

%% Generate data: generate t0 from x0
clear all; clc; close all;

% To create numeric arrays from an Excel spreadsheet:
[X, Xnames] = xlsread('charpyData.xlsx');
X = normalize(X);
x0=X(:,1:end-1);
% Min-max norm
x=(x0-min(x0))/(max(x0)-min(x0));

t0=X(:,end);
t=t0;
%% Split data into train set and test set
idx=crossvalind('Kfold',size(x,1),5);
test_idx = find(idx==1);
train_idx = find(idx~=1);
train_x=x(train_idx,:);
train_t=t(train_idx,:);
test_x=x(test_idx,:);
test_t=t(test_idx,:);


%% Training params
% * Below is the equation for Batch Gradient Descent. Here $i$ is the
% iteration number, $j$ is the power of coresponding $w$, $n$ iterates through
% all data points. $\eta$ is the learning rate for each iteration.
% $W^{i+1}_{j} = W^{i}_{j}-\eta{\sum_{n=1}^N (y(x_{n},W)-t_{n})*x^j)}$
% 
M=4; % Maximum power of x
max_iter=100000;
eta=0.7;
W=zeros(M+1,1);
W_threshold = repmat(0.0001, M+1, 1);
err_threshold = .0001;

%% Training
% Here comes the base matrix with power 4
x_pol=[ones(size(train_x,1),1) train_x train_x.*train_x train_x.*train_x.*train_x ...
    train_x.*train_x.*train_x.*train_x];
% size(x_pol)
for iter = 1:max_iter
    W_prev = W;
    fx = x_pol*W;
    W = W - eta*1/size(train_x,1)*sum(repmat(fx - train_t,1,M+1).*x_pol)';

    % Sum square error on training
    err(iter,1) = 1/2*sum((fx - train_t).^2);
    
    % check for termination conditions
    if abs(W_prev - W) < W_threshold
        break;
    elseif iter>1 && abs(err(iter-1,1)-err(iter,1))< err_threshold
        break;
    end
end

%% Testing
pred_fx=[ones(size(test_x,1),1) test_x test_x.*test_x test_x.*test_x.*test_x ...
    test_x.*test_x.*test_x.*test_x]*W;
test_err = 1/2*sum((pred_fx - x(test_idx,:)).^2);


rmse = sqrt(2*test_err/size(test_idx,1))

%
%% Result 2: Error curve with different iterations
fig2=figure(2);
plot(err,'r');
title('Decreasing Sum square error function');
xlabel('Iterations');
ylabel('Sum of squared error');
saveas(fig2,'Results/MLR8_Sum_sqr_err.jpg','jpg');
%%
% <<Sum_sqr_err.jpg>>
%
%% Result 3: Final Root-Mean-Square Error and W


fprintf('\ncoefficient W: %0.3f \n',W);

fprintf('\n Root mean square error:');
fprintf('%f',rmse)



