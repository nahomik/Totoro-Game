#include<iostream>
using namespace std;
void bubblesort(int array[], int size);
bool binarysearch(int array[], int size, int key);
int main()
{
	cout<<"Enter 5 Numbers randomly: "<<endl;
	int array[5];
	for(int i=0; i<5; i++)
	{
		cout<<"\t"; cin>>array[i];
	}
	bubblesort(array,5);
	cout<<"\n\t\tEnter key to search: ";
	int key;
	cin>>key;
	int result=binarysearch(array,5,key);
	if(result==1)
	cout<<"\n\t\t\tkey found in array"<<endl;
	else
	cout<<"\n\t\t\tkey not found in array"<<endl;
	return 0; 
}
void bubblesort(int array[],int size){
	cout<<"input array is: "<<endl;
	for(int j=0; j<size; j++)
	{
		cout<<"\t\t\tvalue at "<<j<<" index: "<<array[j]<<endl;
	}
	cout<<endl;
	int temp;
	for(int i2=0; i2<size; i2++)
	{
		for(int j=0; j<size-1; j++)
		{
			if(array[j]>array[j+1])
			{
				temp=array[j];
				array[j]=array[j+1];
				array[j+1]=temp;
			}
		}
	}
	cout<<"sorted array is: "<<endl;
	for(int i3=0; i3<size; i3++)
	{
		cout<<"\t\t\tvalue at "<<i3<<" index: "<<array[i3]<<endl;
	}
}
bool binarysearch(int array[],int size,int key)
{
	int start=1, end=size;
	int mid=(start+end)/2;
	while(start<=end && array[mid]!=key)
	{
		if(array[mid]<key)
		{
			start=mid+1;
		}
		else
		{
			end=mid-1;
		}
		mid=(start+end)/2;
		if(array[mid]==key)
		return true;
		else
		return false;
		cout<"\n\n\n";
	}
}
