#include <iostream>
using namespace std;

int main(){
    int a = 10;
    int* ptr = &a;
    int** ptr2 = &ptr; //pointer to pointer
    cout<< a << endl;
    cout << &a << endl;
    cout<< ptr << endl;
    cout<< *ptr << endl;
    cout<< &ptr << endl;
    cout<< ptr2 <<endl;
return 0;
}